export class ResourceUtils {
    static delegateToBehaviour(): void {
        ResourceService.register(
            { application: APP, resourceType: RESOURCE },
            (context) => new BlogResourceService(context),
          );
    }
}