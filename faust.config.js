import { setConfig } from '@faustwp/core';
import templates from './wp-templates';
import possibleTypes from './possibleTypes.json';
import { CustomToolbar } from './plugins/CustomPlugin';

/**
 * @type {import('@faustwp/core').FaustConfig}
 **/
export default setConfig({
  templates,
  experimentalToolbar: true,
  experimentalPlugins: [new CustomToolbar()],
  usePersistedQueries: true,
  possibleTypes,
});
