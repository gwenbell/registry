/*!
   Copyright 2018 Propel http://propel.site/.  All rights reserved.
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

import { h } from "preact";
import { PropelLogo } from "./logo";

export function GlobalHeader(props): JSX.Element {
  return (
    <header>
      <div class="global-header">
        <div class="global-header-inner">
          <PropelLogo
            subtitle={props.subtitle}
            subtitleLink={props.subtitleLink}
          />
          <div class="global-header-right">{props.children}</div>
        </div>
      </div>
    </header>
  );
}
