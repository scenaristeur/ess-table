//import shop from '../../api/shop'
// import auth from 'solid-auth-client';
// import FC from 'solid-file-client'
// const fc = new FC( auth )
// import { v4 as uuidv4 } from 'uuid';
// import ldflex from '@solid/query-ldflex/lib/exports/rdflib'
// import { namedNode } from "@rdfjs/data-model";
import { v4 as uuidv4 } from 'uuid';

// initial state
const state = () => ({
  fields: localStorage.getItem('ess-fields') || [],
  fields_types: [
    { value: {type:'http://www.w3.org/ns/ui#ValueField', name: 'any', html_type: "text" }, text: 'Any' },
    { value: {type:'http://www.w3.org/ns/ui#DateField', name: 'date', html_type: "date" }, text: 'Date' },
    { value: {type:'http://www.w3.org/ns/ui#TimeField', name: 'time', html_type: "time" }, text: 'Time' },
    { value: {type:'http://www.w3.org/ns/ui#Resource', name: 'resource', html_type: "browse" }, text: 'Workspace/Base/Table/Record/Issue/Todo or Solid Resource' },
    { value: {type:'http://www.w3.org/ns/ui#ValueField', name: 'url', html_type: "text" }, text: 'External URL' },
    { value: {type:'http://www.w3.org/ns/ui#SingleLineTextField', name: 'singleline', html_type: "text" }, text: 'Single Line Text' },
    { value: {type:'http://www.w3.org/ns/ui#TextField', name: 'textfield', html_type: "text" }, text: 'Text' },
    { value: {type:'http://www.w3.org/ns/ui#MultiLineTextField', name: 'multiline', html_type: "textarea" }, text: 'MultiLine Text' },
    { value: {type:'http://www.w3.org/ns/ui#BooleanField', name: 'boolean', html_type: "checkbox" }, text: 'Boolean' },
    { value: {type:'http://www.w3.org/ns/ui#NumericField', name: 'numeric', html_type: "number" }, text: 'Numeric' },
    { value: {type:'http://www.w3.org/ns/ui#IntegerField', name: 'integer', html_type: "number" }, text: 'Integer' }, // number ?
    { value: {type:'http://www.w3.org/ns/ui#DecimalField', name: 'decimal', html_type: "number" }, text: 'Decimal' },
    { value: {type:'http://www.w3.org/ns/ui#FloatField', name: 'float', html_type: "number" }, text: 'Float' },
    { value: {type:'http://www.w3.org/ns/ui#ColorField', name: 'color', html_type: "color" }, text: 'Color' },
    { value: {type:'http://www.w3.org/ns/ui#Range', name: 'range', html_type: "range" }, text: 'Range' },
  { value: {type:'http://www.w3.org/ns/ui#SingleLineTextField', name: 'location', html_type: "location" }, text: 'Geo Location Place' },
    { value: {type:'http://www.w3.org/ns/ui#SingleLineTextField', name: 'event', html_type: "event" }, text: 'Calendar Event' }, // date + time ?
    { value: {type:'http://www.w3.org/ns/ui#Montg', name: 'month', html_type: "month" }, text: 'Month' },
    { value: {type:'http://www.w3.org/ns/ui#Week', name: 'week', html_type: "week" }, text: 'Week' },
    { value: {type:'http://www.w3.org/ns/ui#Image', name: 'image', html_type: "image" }, text: 'Image' },
    { value: {type:'http://www.w3.org/ns/ui#EmailField', name: 'email', html_type: "email" }, text: 'Email' },
    { value: {type:'http://www.w3.org/ns/ui#PhoneField', name: 'phone', html_type: "tel" }, text: 'Phone' },
    { value: {type:'http://www.w3.org/ns/ui#MultiLineTextField', name: 'code', html_type: "textarea" }, text: 'Code' },
    { value: {type:'http://www.w3.org/ns/ui#ValueField', name: 'file', html_type: "file" }, text: 'file Upload' },
    { value: {type:'http://www.w3.org/ns/ui#ValueField', name: 'vcard', html_type: "browse" }, text: 'Vcard' },
    { value: {type:'http://www.w3.org/ns/ui#Select', name: 'select', html_type: "select" }, text: 'Select (todo which values /list/array/source ?)' },
    { value: {type:'http://www.w3.org/ns/ui#TriStateField', name: 'tristate', html_type: "radio" }, text: 'Tri State' }, // True False /unknown ?
    { value: {type:'http://www.w3.org/ns/ui#Search', name: 'search', html_type: "search" }, text: 'Search' }, // input type="search" https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input/search
    //  { value: {type:'http://www.w3.org/ns/ui#DateTimeField', name: 'datetime', html_type: "text" }, text: 'DateTime' }, // retired

    // { value: 'text', text: 'Text' },
    // { value: 'number', text: 'Number' },
    // { value: 'link', text: 'Link to another Record/Table/Base/Workspace or Solid Resource' },
    // { value: 'http://www.w3.org/ns/ui#ValueField', text: 'External URL' },
    // { value: 'email', text: 'Email' },
    // { value: 'password', text: 'Password' },
    // { value: 'checkbox', text: 'Checkbox' },
    // { value: 'url', text: 'Url' },
    // { value: 'tel', text: 'Telephone' },
    // { value: 'date', text: 'Date' },
    // { value: 'time', text: 'Time' },
    // { value: 'range', text: 'Range' },
    // { value: 'color', text: 'Color' },
    // { value: 'location', text: 'Location' },
    // { value: 'select', text: 'Select' },
  ]
})

// getters
const getters = {}

// actions
const actions = {
  async addItem(context, item) {
    item.url = context.rootState.solid.storage+context.rootState.table.privacy+'/table/fields/'+uuidv4()+'.ttl'//#it'
    item.type = 'http://www.w3.org/ns/ui#ValueField'
    item.multiple = false
    console.log('item', item)
    context.commit('addItem', item)
    await this._vm.$createField(item)
    //  this.dispatch('table/getWorkspaces')
  },
  async getFields(context){
    let url = context.rootState.solid.storage+context.rootState.table.privacy+'/table/fields/'
    console.log('URL',url)
    let remote_fields = await this._vm.$getFields(url)
    console.log("Remote",remote_fields)

    //  let st = this.state
    let fields = remote_fields.map(x => ({'name' : x.name, 'createdAt': x.createdAt, 'updatedAt': x.updatedAt, url: x.url})).sort((itemA, itemB) => new Date(itemA.updatedAt) - new Date(itemB.updatedAt));
    console.log('rem', fields)
    context.commit('setFields', fields)



    // let fields = remote_fields.map(x => (
    //   {'name' : x.name,
    //   'type' : x.type,
    //   'multiple': x.multiple,
    //   'createdAt': x.createdAt,
    //   'updatedAt': x.updatedAt,
    //   url: x.url}))
    //   .sort((itemA, itemB) => new Date(itemA.updatedAt) - new Date(itemB.updatedAt));
    //   console.log('rem', fields)
    //   context.commit('setFields', JSON.parse(fields))





    //  this.replaceState(Object.assign(this.state, st));

  }
  // async init(context) {
  //   const data = localStorage.getItem('ess-fields');
  //   console.log("Local",data)
  //   if (data != null){
  //     let st = this.state
  //     st.fields = JSON.parse(data)
  //     this.replaceState(Object.assign(this.state, st));
  //   }
  //   console.log(context)
  // },
}

// mutations
const mutations = {
  addItem(state, item){

    state.fields.push(item)
    //  localStorage.setItem('ess-fields', JSON.stringify(state.fields));
  },
  setFields(state, f){
    //localStorage.setItem('ess-fields', JSON.stringify(state.fields));
    state.fields = f
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
