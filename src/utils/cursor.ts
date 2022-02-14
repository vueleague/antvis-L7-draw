import { Scene } from '@antv/l7';
import { ICursor, ICursorType } from '../typings';

export class Cursor {
  container: HTMLDivElement | null;
  cursor: ICursorType | null = null;
  options: ICursor;

  constructor(scene: Scene, options: ICursor) {
    this.container = (scene.getContainer()?.querySelector('.amap-maps') ??
      null) as HTMLDivElement | null;
    this.options = options;
  }

  setCursor(cursor: ICursorType | null) {
    if (cursor !== this.cursor && this.container) {
      this.container.style.cursor = cursor ? this.options[cursor] : '';
    }
  }
}
