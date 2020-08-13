---
title: Vue Note ¯\(ツ)/¯ 
---

------------------------------------------------------------------------------

## Creating a Vue instance

Vues design is inspired by the MVVM pattern
business logic and data(Model) (view (databinding) viewModel)presentation logic


Vue instance properties denoted with $, as opposed to user defined properties

------------------------------------------------------------------------------

## Template Syntax
can actually write render functions with jsx support if needed otherwise templates are good

`<span>Message: {{ msg }}</span>`

called interpolation and uses mustache syntax
will update with changes to data object

`<span v-once>noChange: {{ msg }}</span>`

inside mustache = plain text not html

`<p>Using mustaches: {{ rwaHtml }}</p>`
`<p>Using v-html directive: <span v-html="rawHtml></span></p>`

`Using mustaches: <span style="color:red">This should be red but nooo!</span>`
`Using v-html directive: This comes out red`

dynamically rendering html is bad like insideHtml don't do it without further research

mustahes cannot be inside HTML attributes, instead usev-bind directive

`<div v-bind:id="dynamicId></div>

JS can go inside mustaches, but only one expression 








