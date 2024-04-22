import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

/**
 * The function `validRouteGuard` checks if a navigation state exists and redirects to 'hero-list' if
 * not.
 * @param route - The `route` parameter in the `validRouteGuard` function represents the route that is
 * being navigated to. It contains information about the route such as the URL, route parameters, query
 * parameters, etc. This parameter is used to determine if the user is allowed to navigate to the
 * specified route based
 * @param state - The `state` parameter in the `validRouteGuard` function refers to the state of the
 * current navigation in the Angular Router. It is used to access any additional information or data
 * that may have been passed along with the navigation. In this case, the function is checking if there
 * is any state information
 * @returns The `validRouteGuard` function is returning a boolean value. If the current navigation
 * extras state is defined, it returns `true`. Otherwise, it navigates to the 'hero-list' route and
 * returns `false`.
 */
export const ValidRouteGuard: CanActivateFn = (route, state) => {
 
 if ( !inject(Router).getCurrentNavigation()?.extras.state){
   //go to Home Component
   inject(Router).navigate(['hero-list']);
  return false
 }
  return true;
};
