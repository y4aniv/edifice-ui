export * from ".";

/** Hack pour rendre compatible le module commonjs/es2015 avec une balise <script> dans un navigateur. */
declare var window: any;
declare var exports: any;
declare var module: any;
if (typeof window !== "undefined") {
  window.entcore = window.entcore ?? {};
  window.entcore["ode-ts-client"] = window.entcore["ode-ts-client"] ?? exports ?? module?.exports;
}
