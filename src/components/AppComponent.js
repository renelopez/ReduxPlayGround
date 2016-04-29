/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React from 'react';
import Links from '../components/LinksComponent';


let App = () => (
  <div>
    <Links />
    {this.props.children}
  </div>
);

export default App;
