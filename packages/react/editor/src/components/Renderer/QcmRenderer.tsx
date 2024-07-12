import { Button, Card, Checkbox } from "@edifice-ui/react";
import { Editor, NodeViewWrapper } from "@tiptap/react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const QcmRenderer = (props: { editor: Editor; [x: string]: any }) => {
  const PropsJson = props.node.attrs.json as {
    qcmId: string;
    qcmTitle: string;
    qcmEndMessage?: string;
    qcmData: {
      question: string;
      options: string[];
      correctIndex: number[];
      explanation?: string;
    }[];
    qcmSettings: {
      showScore: boolean;
      showCorrectAnswers: boolean;
      showPeerAnswers: boolean;
    };
  };

  const [checkBoxes, setCheckBoxes] = useState<{
    [key: number]: { [key: number]: boolean };
  }>({});
  const [submitted, setSubmitted] = useState<{ [key: number]: boolean }>({});
  const [correctAnswersVisible, setCorrectAnswersVisible] = useState<{
    [key: number]: boolean;
  }>({});
  const [incorrectSelections, setIncorrectSelections] = useState<{
    [key: number]: { [key: number]: boolean };
  }>({});

  const [usageData, setUsageData] = useState<{
    [key: number]: { [key: number]: number };
  }>({});

  useEffect(() => {
    const storedData = localStorage.getItem(
      `TipTapQCM-Usage-${PropsJson.qcmId}`,
    );
    if (storedData) {
      setUsageData(JSON.parse(storedData));
    }
  }, [PropsJson.qcmId]);

  const handleCheckboxChange = (qcmIndex: number, optionIndex: number) => {
    setCheckBoxes((prevState) => ({
      ...prevState,
      [qcmIndex]: {
        ...prevState[qcmIndex],
        [optionIndex]: !prevState[qcmIndex]?.[optionIndex],
      },
    }));
  };

  const handleSubmit = (qcmIndex: number) => () => {
    const correctAnswers = PropsJson.qcmData[qcmIndex].correctIndex;
    const userSelections = checkBoxes[qcmIndex] || {};

    const newIncorrectSelections = Object.keys(userSelections).reduce(
      (acc, key) => {
        const isSelected = userSelections[Number(key)];
        const isCorrect = correctAnswers.includes(Number(key));
        if (isSelected && !isCorrect) {
          acc[key] = true;
        }
        return acc;
      },
      {} as { [key: string]: boolean },
    );

    setIncorrectSelections((prevState) => ({
      ...prevState,
      [qcmIndex]: newIncorrectSelections,
    }));

    setSubmitted((prevState) => ({
      ...prevState,
      [qcmIndex]: true,
    }));

    setCorrectAnswersVisible((prevState) => ({
      ...prevState,
      [qcmIndex]: true,
    }));

    const newUsageData = { ...usageData };
    Object.keys(userSelections).forEach((key) => {
      const optionIndex = Number(key);
      if (!newUsageData[qcmIndex]) {
        newUsageData[qcmIndex] = {};
      }
      if (!newUsageData[qcmIndex][optionIndex]) {
        newUsageData[qcmIndex][optionIndex] = 0;
      }
      newUsageData[qcmIndex][optionIndex] += 1;
    });

    setUsageData(newUsageData);
    localStorage.setItem(
      `TipTapQCM-Usage-${PropsJson.qcmId}`,
      JSON.stringify(newUsageData),
    );
  };

  const calculateScore = () => {
    const questions = Object.keys(PropsJson.qcmData);

    let validAnswersCount = 0;

    questions.forEach((key) => {
      const correctAnswers = PropsJson.qcmData[Number(key)].correctIndex;

      const userSelections = checkBoxes[Number(key)] || {};
      const isValid =
        correctAnswers.every((correctIndex) => {
          return userSelections[correctIndex] === true;
        }) &&
        correctAnswers.length ===
          Object.keys(userSelections).filter(
            (index: any) => userSelections[index],
          ).length;

      if (isValid) {
        validAnswersCount += 1;
      }
    });

    const totalQuestions = questions.length;

    return `${validAnswersCount}/${totalQuestions}`;
  };

  const { t } = useTranslation("");

  return (
    <NodeViewWrapper>
      <Card>
        <Card.Body>
          <h2>{PropsJson.qcmTitle}</h2>
        </Card.Body>
      </Card>
      {PropsJson.qcmData.map(
        (
          qcm: {
            question: string;
            options: string[];
            correctIndex: number[];
            explanation?: string;
          },
          qcmIndex: number,
        ) => (
          <div data-drag-handle key={qcmIndex}>
            <Card className="mb-16" isClickable={false} isSelected={false}>
              <Card.Body>
                <Card.Title>
                  <h3>{qcm.question}</h3>
                </Card.Title>
              </Card.Body>
              <Card.Body>
                <ul style={{ listStyleType: "none" }}>
                  {qcm.options.map((option, optionIndex) => (
                    <li
                      key={optionIndex}
                      className="mb-8"
                      style={{
                        color:
                          PropsJson.qcmSettings.showCorrectAnswers &&
                          correctAnswersVisible[qcmIndex] &&
                          qcm.correctIndex.includes(optionIndex)
                            ? "var(--edifice-green)"
                            : PropsJson.qcmSettings.showCorrectAnswers &&
                                incorrectSelections[qcmIndex] &&
                                incorrectSelections[qcmIndex][optionIndex]
                              ? "var(--edifice-red)"
                              : "inherit",
                      }}
                    >
                      <Checkbox
                        label={`${option} ${
                          PropsJson.qcmSettings.showPeerAnswers &&
                          submitted[qcmIndex]
                            ? `(${usageData[qcmIndex]?.[optionIndex] || 0})`
                            : ""
                        }`}
                        checked={checkBoxes[qcmIndex]?.[optionIndex] || false}
                        onChange={() =>
                          handleCheckboxChange(qcmIndex, optionIndex)
                        }
                        disabled={submitted[qcmIndex] || false}
                      />
                    </li>
                  ))}
                </ul>
              </Card.Body>
              <Card.Body>
                <Button
                  onClick={handleSubmit(qcmIndex)}
                  disabled={submitted[qcmIndex] || false}
                >
                  {t("tiptap.qcm.validate")}
                </Button>
              </Card.Body>
              {submitted[qcmIndex] && (
                <Card.Footer>
                  <p>{qcm.explanation}</p>
                </Card.Footer>
              )}
            </Card>
          </div>
        ),
      )}
      {Object.keys(submitted).length === PropsJson.qcmData.length && (
        <Card className="mb-16" isClickable={false} isSelected={false}>
          <Card.Body>
            {PropsJson.qcmSettings.showScore && (
              <h3>{`${t("tiptap.qcm.results")} : ${calculateScore()}`}</h3>
            )}
          </Card.Body>
          <Card.Body>
            {PropsJson.qcmEndMessage && <p>{PropsJson.qcmEndMessage}</p>}
          </Card.Body>
        </Card>
      )}
    </NodeViewWrapper>
  );
};

export default QcmRenderer;
