<template>
    <div class="add-item">
        <form action="#" method="post" v-on:submit.prevent="submitForm" class="mb-3">
            <b-form-input v-model="itemLabel" v-on:submit.prevent="submitForm" :placeholder="'Add a '+namespace"></b-form-input>
        </form>
    </div>
</template>

<script>

 export default {
   name: 'NewItemForm',
   props: ['namespace'],
   data() {
     return {
       itemLabel: '',
     };
   },
   methods: {
     submitForm() {
       if (this.itemLabel) {
           this.$store.dispatch(this.namespace+'/addItem', {
             name: this.itemLabel,
           });
         this.itemLabel = '';
       }
     },
   },
 };
 </script>

  <style>
  .add-item input {
    outline: none;
    border: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    width: 100%;
    transition: all 0.25s;
    background: inherit;
    color: white;
  }
  .add-item input:focus {
    border-bottom-color: rgba(255, 255, 255, 1);
  }
</style>
