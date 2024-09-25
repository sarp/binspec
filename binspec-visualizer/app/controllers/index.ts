import Controller from '@ember/controller';
import { action } from '@ember/object';
import { DataSegment } from 'binspec-visualizer/lib/data-segment';
import { tracked } from '@glimmer/tracking';
import SampleSQLiteData from 'binspec-visualizer/lib/sample-sqlite-data';
import { service } from '@ember/service';
import type HoverStateService from 'binspec-visualizer/services/hover-state';

export default class IndexController extends Controller {
  @tracked highlightedSegment?: DataSegment =
    this.sampleSegments[0]!.children[0];

  @service declare hoverState: HoverStateService;

  get sampleData(): Uint8Array {
    return SampleSQLiteData.data;
  }

  get sampleSegments(): DataSegment[] {
    return SampleSQLiteData.segments;
  }

  @action
  handleSegmentMouseEnter(section: 'structure' | 'raw', segment: DataSegment) {
    this.hoverState.setSegment(segment, section);
  }

  @action
  handleSegmentMouseLeave() {
    this.hoverState.clear();
  }

  @action
  handleSegmentSelected(segment: DataSegment) {
    this.highlightedSegment = segment;
  }
}
