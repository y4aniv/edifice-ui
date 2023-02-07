import { AgentFactory } from '.';
import { ACTION, IActionParameters, IContext, IHttp, ManagePropertiesParameters, ManagePropertiesResult, PROP_KEY, RESOURCE, UpdatePropertiesParameters, UpdatePropertiesResult, TransportFrameworkFactory, OpenParameters, PrintParameters, PublishParameters, PublishResult } from '..';
import { AbstractBusAgent, IHandler } from '../explore/Agent';

declare var console:any;
declare var window:any;

declare interface Blob{
    name: string;
}

console.log("Blog agent loading....");

class BlogAgent extends AbstractBusAgent {
    constructor() {
        super( RESOURCE.BLOG );
		this.registerHandlers();	
        console.log("Blog agent initialized!");
    }

    protected ctx:IContext|null = null;
    protected http:IHttp = TransportFrameworkFactory.instance().newHttpInstance();
    protected checkHttpResponse:<R>(result:R)=>R = result => {
        if( this.http.latestResponse.status>=300 ) {
            throw this.http.latestResponse.statusText;
        }
        return result;
    }

    public registerHandlers(): void {
        this.setHandler( ACTION.OPEN,   	this.openBlog as unknown as IHandler );
        this.setHandler( ACTION.CREATE,   	this.createBlog as unknown as IHandler );
        this.setHandler( ACTION.MANAGE,     this.onManage as unknown as IHandler );
        this.setHandler( ACTION.UPD_PROPS,  this.onUpdateProps as unknown as IHandler );
        this.setHandler( ACTION.PRINT,      this.onPrint as unknown as IHandler );
        this.setHandler( ACTION.PUBLISH,    this.onPublish as unknown as IHandler );
    }

    onPrint(parameters: PrintParameters):void{
        window.open(
            `/blog/print/blog#/print/${parameters.resourceId}?comments=${parameters.withComments || true}`,
            "_blank"
          );
    }

    openBlog( parameters:OpenParameters ): void {
        window.open( `/blog#/view/${parameters.resourceId}`, "_self" );
    }

    createBlog( parameters:IActionParameters ): void {
        window.open( `/blog#/edit/new`, "_self" );
    }

    onManage( parameters:ManagePropertiesParameters ): Promise<ManagePropertiesResult> {
        const res:ManagePropertiesResult = {
            genericProps:[{
                key:PROP_KEY.TITLE
            },{
                key:PROP_KEY.IMAGE
            },{
                key:PROP_KEY.URL
            }]
        }
        return Promise.resolve().then( () => res );
    }

    onUpdateProps( parameters:UpdatePropertiesParameters ): Promise<UpdatePropertiesResult> {
        const res:UpdatePropertiesResult = {
            resources: parameters.resources
        }
        alert( "TODO: update properties" );
        return Promise.resolve().then( () => res );
    }

    async onPublish(parameters: PublishParameters): Promise<PublishResult> {
        const publicationAsFormData = new FormData();
        publicationAsFormData.append("title", parameters.title);
        publicationAsFormData.append("cover", parameters.cover);
        publicationAsFormData.append("coverName", (parameters.cover as any as Blob).name);
        publicationAsFormData.append("coverType", parameters.cover.type);
        publicationAsFormData.append("teacherAvatar", parameters.teacherAvatar);
        publicationAsFormData.append("teacherAvatarName", 
            (parameters.teacherAvatar as any as Blob).name || `teacherAvatar_${parameters.userId}`
        );
        publicationAsFormData.append("teacherAvatarType", parameters.teacherAvatar.type);
        publicationAsFormData.append("language", parameters.language);
        parameters.activityType.forEach(activityType => {
            publicationAsFormData.append("activityType[]", activityType);
        });
        parameters.subjectArea.forEach(subjectArea => {
            publicationAsFormData.append("subjectArea[]", subjectArea);
        });
        parameters.age.forEach(age => {
            publicationAsFormData.append("age[]", age.toString());
        });
        publicationAsFormData.append("description", parameters.description);
        let keyWordsArray = parameters.keyWords.split(',')
        keyWordsArray.forEach(keyWord => {
            publicationAsFormData.append("keyWords[]", keyWord.trim());
        });
        publicationAsFormData.append("licence", parameters.licence);
        publicationAsFormData.append("pdfUri", `${window.location.origin}/blog/print/blog#/print/${parameters.resourceId}`);
        publicationAsFormData.append("application", parameters.application ? parameters.application : "");
        publicationAsFormData.append("resourceId", parameters.resourceId);
        publicationAsFormData.append("teacherSchool", parameters.userStructureName);

        return this.http.post("/appregistry/library/resource", publicationAsFormData, {
            headers: {'Content-Type': 'multipart/form-data'}
        }).then( this.checkHttpResponse );
    }
}

export const factory:AgentFactory = () => new BlogAgent();