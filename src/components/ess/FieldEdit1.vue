<template>
  <b-container>
    <h3>{{field.name}} LKLKL</h3>
    <b-form-select v-model="field.type" :options="field_types"></b-form-select>
    <b-form-checkbox v-model="field.multiple" > Allow Multiple</b-form-checkbox>
    <b-form-checkbox name="propertyType" v-model="field.propertyType" value="ObjectProperty" > ObjectProperty</b-form-checkbox>
    <b-form-checkbox name="propertyType" v-model="field.propertyType" value="DatatypeProperty" > DatatypeProperty</b-form-checkbox>

        DatatypeProperty
        ObjectProperty
        FunctionalProperty
        InverseFunctionalProperty

    <small>{{field}}</small>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'FieldEdit',
  props: ['field'],
  // data() {
  //   return {
  //   //  type_options: [
  //       // { value: 'http://www.w3.org/ns/ui#ValueField', text: 'Value' },
  //       // { value: 'http://www.w3.org/ns/ui#Resource', text: 'Another Record/Table/Base/Workspace or Solid Resource' },
  //       // { value: 'http://www.w3.org/ns/ui#ValueField', text: 'External URL' },
  //       // { value: 'http://www.w3.org/ns/ui#SingleLineTextField', text: 'Single Line Text' },
  //       // { value: 'http://www.w3.org/ns/ui#TextField', text: 'Text' },
  //       // { value: 'http://www.w3.org/ns/ui#MultiLineTextField', text: 'MultiLine Text' },
  //       // { value: 'http://www.w3.org/ns/ui#ValueField', text: 'Value' },
  //       // { value: 'http://www.w3.org/ns/ui#BooleanField', text: 'Boolean' },
  //       // { value: 'http://www.w3.org/ns/ui#TriStateField', text: 'Tri State' },
  //       // { value: 'http://www.w3.org/ns/ui#NumericField', text: 'Numeric' },
  //       // { value: 'http://www.w3.org/ns/ui#IntegerField', text: 'Integer' },
  //       // { value: 'http://www.w3.org/ns/ui#DecimalField', text: 'Decimal' },
  //       // { value: 'http://www.w3.org/ns/ui#FloatField', text: 'Float' },
  //       // { value: 'http://www.w3.org/ns/ui#ColorField', text: 'Color' },
  //       // { value: 'http://www.w3.org/ns/ui#DateField', text: 'Date' },
  //       // { value: 'http://www.w3.org/ns/ui#DateTimeField', text: 'DateTime' },
  //       // { value: 'http://www.w3.org/ns/ui#TimeField', text: 'Time' },
  //       // { value: 'http://www.w3.org/ns/ui#EmailField', text: 'Email' },
  //       // { value: 'http://www.w3.org/ns/ui#PhoneField', text: 'Phone' },
  //     //]
  //   }
  // },
  computed: mapState({
    fields_types: s => s.field.fields_types,
  }),
  watch:{
    field(){
      console.log("Field updated",this.field)

      this.$updateField(this.field)

    },
  }
}
</script>

<style>

</style>
