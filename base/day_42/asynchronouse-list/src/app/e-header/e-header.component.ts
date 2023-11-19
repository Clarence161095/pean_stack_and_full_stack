import { Component } from '@angular/core';
import { EHeaderFacade } from './state/e-header.facade';

@Component({
  selector: 'app-e-header',
  templateUrl: './e-header.component.html',
  styleUrls: ['./e-header.component.scss'],
})
export class EHeaderComponent {
  defaultHeader = [] as any;

  header = [] as any;

  constructor(private facade: EHeaderFacade) {
    this.facade.loadEHeaders();
    this.facade.loadDefaultHeader();

    this.facade.getDefaultHeader$.subscribe((data) => {
      this.defaultHeader = [...data];
    });
    this.facade.eHeaders$.subscribe((data: any) => {
      this.header = [...data.eHeaders].sort(
        (a: any, b: any) => a.index - b.index
      );
    });
  }

  getPlaceholder(id: any) {
    return this.defaultHeader.find((h: any) => h.id === id)?.name;
  }

  // Di chuyển phần tử lên
  moveItemUp(index: number) {
    if (index > 0) {
      const currentItem = this.header[index];
      const previousItem = this.header[index - 1];
      this.header[index] = previousItem;
      this.header[index - 1] = currentItem;
    }
  }

  // Di chuyển phần tử xuống
  moveItemDown(index: number) {
    if (index < this.header.length - 1) {
      const currentItem = this.header[index];
      const nextItem = this.header[index + 1];
      this.header[index] = nextItem;
      this.header[index + 1] = currentItem;
    }
  }
}
