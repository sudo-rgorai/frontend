# Frontend

This contains all the 3 portals merged on master branches respectively.

Things to do:
- [ ] Merge other branches as well
- [ ] Think of a better security system
- [ ] Integrate with backend (While integrating, have a config file where we can specify the base URL and the relative API url, so that we don't have to change at all places the URL in case the URL changes due to restarts or otherwise)
- [ ] Bring all portals to same UI
- [ ] In shared components, use cookies that have been set already, to identify
      the userType and fetch content accordingly

## Other Stuffs

- Remember to `npm install <package_name> --save` to get the dependency added to package config.
- To run: `npm install`, followed by `npm start`
- Integrate using middleware. Both Moodle and middleware can be run locally. Please see the middleware repo for further details (and also details on backend integration)
