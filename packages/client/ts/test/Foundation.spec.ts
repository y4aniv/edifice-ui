import "jasmine";
import * as UserInfoData from './mocks/data/userinfo.json';
import { APP, ERROR_CODE, framework, IContext, IExplorerContext, RESOURCE } from "../src/index";
import { ExplorerFramework } from "../src/foundation/ExplorerFramework";
import { MockedAgentLoader } from "./mocks/agents/MockedAgentLoader";

/** Test the fundations of the framework. */
describe("Foundation", function() {
    var context:IExplorerContext|null = null;
    const userinfo = UserInfoData;

    /** Utility function */
    let getModel = ():IContext => {
        let model = context?.getContext();
        if( typeof model==="undefined" )
            throw new Error("Context seems undefined.");
        return model;
    }

    /** @test Mocked data */
    //FIXME validate against jsonschema ?
    it("should have mocked data", () => { expect(userinfo.apps).toBeDefined(); });

    /** @test Framework bootstrapping */
    it("should be available", () => { expect(framework).toBeDefined(); });

    /** @test Getting an explorer context. */
    it("should get a valid context without throwing an error", ()=>{
        context = framework.createContext( [RESOURCE.FOLDER], APP.BLOG );
        expect(context).toBeDefined();
    });

    /** @test Accessing the context before initializing it is an error. */
    it("is using the context before initializing it, thus throwing an error.", ()=>{
        /// The lambda is mandatory for toThrowError() to work, @see https://stackoverflow.com/questions/21221697/using-tothrowerror-in-jasmine
        expect( ()=>{context?.getContext();} ).toThrowError(ERROR_CODE.NOT_INITIALIZED);
    });

    /**
     * @test Mocking the agents.
     * Créer des dossiers, sous-dossiers, lister les dossiers et comparer le résultat.
     * Cela nécessite de mocker le serveur.
     **/
    it("is mocking the agents", ()=>{
        (framework as ExplorerFramework).setAgentLoader( new MockedAgentLoader() );
    });

    it("should initialize a context", async ()=>{
        const ctx = await context?.initialize();
        expect(ctx).toBeDefined();
    });

    it("should have access to folders of first level", ()=>{
        expect( getModel().folders ).toBeInstanceOf(Array);
        expect( getModel().folders.length ).toBe(0);
    });

    it("can create a top level folder.", async ()=>{
        const result = await context?.createFolder( RESOURCE.FOLDER, "default", "Root folder 1");
        expect(result).toBeDefined();
        expect(result?.name).toBe("Root folder 1");
        if( !!result ) getModel().folders.push( result );
    });

    it("should have access to folders of first level", ()=>{
        expect( getModel().folders.length ).toBe(1);
    });

    
//    it("", ()=>{});

//    it("", ()=>{});

});
