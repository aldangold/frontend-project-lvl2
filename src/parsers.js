import YAML from 'js-yaml';

const parsers = {
  json: JSON.parse,
  yaml: YAML.safeLoad,
  yml: YAML.safeLoad,
};

export default (fileData, format) => parsers[format](fileData);
