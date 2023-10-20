import { IResource } from "../interface";
import { AbstractBehaviourService } from "./AbstractBehaviourService";

type TimelineData = {
  icon: string
  created: { $date: number }
  headline: string
  modified: { $date: number }
  owner: { userId: string, displayName: string }
  text: string
  textPlain: string
  type: string
  _id: string
  trashed?: boolean
  shared?: any;
}

export class TimelinegeneratorBehaviour extends AbstractBehaviourService {
  APP = "timelinegenerator";
  RESOURCE = "timelinegenerator";

	loadResources() {
		return new Promise<IResource[]>( async (resolve, reject) => {
      try {
        const timelines = await this.httpGet<TimelineData[]>('/timelinegenerator/timelines');
				const resources = timelines.map( timeline => {
					let timelineIcon = timeline.icon || "/img/illustrations/timeline-default.png";
					return this.dataToResource({
						title : timeline.headline,
						ownerName : timeline.owner.displayName,
						owner : timeline.owner.userId,
						icon : timelineIcon,
						path : '/timelinegenerator#/view/' + timeline._id,
						_id : timeline._id,
            shared: typeof timeline.shared !== "undefined",
            modified: timeline.modified
					});
				});
        resolve(resources);
			} catch (error) {
        reject(error);
      };
    });
	}
}
