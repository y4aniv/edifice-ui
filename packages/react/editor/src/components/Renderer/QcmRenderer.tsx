import { Button, Card } from "@edifice-ui/react";
import { Editor, NodeViewWrapper } from "@tiptap/react";
import { useState } from "react";

const QcmRenderer = (props: { editor: Editor; [x: string]: any }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: number | null;
  }>({});
  const [disabled, setDisabled] = useState<{ [key: number]: boolean }>({});

  const handleSelect = (qcmIndex: number, answerIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [qcmIndex]: answerIndex }));
    setDisabled((prev) => ({ ...prev, [qcmIndex]: true }));
  };

  return (
    <NodeViewWrapper>
      {props.node.attrs.json.map(
        (
          qcm: {
            question: string;
            answers: string[] | number[];
            correct: number;
            explanation?: string;
          },
          qcmIndex: number,
        ) => (
          <div data-drag-handle>
            <Card
              key={qcmIndex}
              className="mb-16"
              isClickable={false}
              isSelected={false}
            >
              <Card.Body>
                <Card.Title>
                  <h3>{qcm.question}</h3>
                </Card.Title>
              </Card.Body>
              <Card.Body>
                <ul style={{ listStyleType: "decimal" }}>
                  {qcm.answers.map((answer, answerIndex) => (
                    <li key={answerIndex} className="mb-8">
                      <Button
                        variant={"ghost"}
                        onClick={() => handleSelect(qcmIndex, answerIndex)}
                        disabled={!!disabled[qcmIndex]}
                        color={"tertiary"}
                        style={{
                          color:
                            selectedAnswers[qcmIndex] != null
                              ? answerIndex === qcm.correct
                                ? "var(--edifice-green)"
                                : selectedAnswers[qcmIndex] === answerIndex
                                  ? "var(--edifice-red)"
                                  : ""
                              : "",
                        }}
                      >
                        {answer}
                      </Button>
                    </li>
                  ))}
                </ul>
              </Card.Body>
              {selectedAnswers[qcmIndex] != null && qcm.explanation && (
                <Card.Footer>
                  <p>{qcm.explanation}</p>
                </Card.Footer>
              )}
            </Card>
          </div>
        ),
      )}
    </NodeViewWrapper>
  );
};

export default QcmRenderer;
