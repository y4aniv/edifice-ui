[ode-ts-client](../README.md) / [Exports](../modules.md) / ITrackingParams

# Interface: ITrackingParams

## Hierarchy

* **ITrackingParams**

  ↳ [*IMatomoTrackingParams*](imatomotrackingparams.md)

## Table of contents

### Properties

- [detailApps](itrackingparams.md#detailapps)
- [doNotTrack](itrackingparams.md#donottrack)
- [trackOnly](itrackingparams.md#trackonly)

## Properties

### detailApps

• **detailApps**: *boolean*

Set to true if state changes of the Single Page App need to be tracked.

___

### doNotTrack

• **doNotTrack**: *string*[]

Blacklist of events not to track, in the form "app" or "app.eventName" or "*.eventName".

___

### trackOnly

• **trackOnly**: *string*[]

Whitelist of events to track, in the form "app" or "app.eventName" or "*.eventName".
