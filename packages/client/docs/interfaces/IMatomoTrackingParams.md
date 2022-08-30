[ode-ts-client](../README.md) / [Exports](../modules.md) / IMatomoTrackingParams

# Interface: IMatomoTrackingParams

## Hierarchy

* [*ITrackingParams*](itrackingparams.md)

  ↳ **IMatomoTrackingParams**

## Table of contents

### Properties

- [Profile](imatomotrackingparams.md#profile)
- [Project](imatomotrackingparams.md#project)
- [School](imatomotrackingparams.md#school)
- [UserId](imatomotrackingparams.md#userid)
- [detailApps](imatomotrackingparams.md#detailapps)
- [doNotTrack](imatomotrackingparams.md#donottrack)
- [siteId](imatomotrackingparams.md#siteid)
- [trackOnly](imatomotrackingparams.md#trackonly)
- [url](imatomotrackingparams.md#url)

## Properties

### Profile

• **Profile**: *string*

___

### Project

• **Project**: *string*

___

### School

• **School**: *string*

___

### UserId

• **UserId**: *string*

___

### detailApps

• **detailApps**: *boolean*

Set to true if state changes of the Single Page App need to be tracked.

Inherited from: [ITrackingParams](itrackingparams.md).[detailApps](itrackingparams.md#detailapps)

___

### doNotTrack

• **doNotTrack**: *string*[]

Blacklist of events not to track, in the form "app" or "app.eventName" or "*.eventName".

Inherited from: [ITrackingParams](itrackingparams.md).[doNotTrack](itrackingparams.md#donottrack)

___

### siteId

• **siteId**: *number*

___

### trackOnly

• **trackOnly**: *string*[]

Whitelist of events to track, in the form "app" or "app.eventName" or "*.eventName".

Inherited from: [ITrackingParams](itrackingparams.md).[trackOnly](itrackingparams.md#trackonly)

___

### url

• **url**: *string*
