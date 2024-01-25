import * as PIXI from "pixi.js";

import { autoResize, toBlob, updateImageFromBlob } from "./misc";

/**
 * This function rotate the sprite by adding PI/2
 *
 * @param application The PIXI.Application context
 * @param spriteName The name of the sprite representing the image
 */
export async function rotate(
  application: PIXI.Application,
  spriteName: string,
): Promise<void> {
  const sprite = application?.stage.getChildByName(
    spriteName,
    true,
  ) as PIXI.Sprite | null;
  if (application && sprite) {
    if (!application) return undefined;
    // create blob
    const blob = await toBlob(application);
    // replace sprite using blob
    await updateImageFromBlob(application, {
      imgDatasource: blob,
      spriteName,
      settings: {
        sprite: {
          rotation: sprite.rotation,
          size: { width: sprite.width, height: sprite.height },
          position: { x: sprite.position.x, y: sprite.position.y },
          scale: { x: sprite.scale.x, y: sprite.scale.y },
          anchor: { x: sprite.anchor.x, y: sprite.anchor.y },
        },
        stage: {
          size: {
            width: application.stage.width,
            height: application.stage.height,
          },
          scale: { x: application.stage.scale.x, y: application.stage.scale.y },
        },
      },
    });
    // get new sprite
    const newSprite = application?.stage.getChildByName(
      spriteName,
      true,
    ) as PIXI.Sprite | null;
    // rotate
    if (newSprite) {
      newSprite.rotation += Math.PI / 2;
      autoResize(application, newSprite);
    }
  }
}
