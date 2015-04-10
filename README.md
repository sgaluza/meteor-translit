# meteor-translit
Transliteration for Meteor using ru.wikipedia.org/wiki/ISO_9 rules.
It's a wrapper for popular translit library: https://github.com/xguest/iso_9_js/blob/master/translit.js

## Usage

```
translit('привет мир', 1); // диакритика
translit('привет мир', 2); // Беларусь
translit('привет мир', 3); // Болгария
translit('привет мир', 4); // Македония
translit('привет мир', 5); // Россия
translit('привет мир', 6); // Украина

translit('privet mir', -1); // Обратная транслитерация
```