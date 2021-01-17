<template>
    <div class="add-item">
        <form action="#" method="post" v-on:submit.prevent="submitForm" class="mb-3">
            <b-form-input v-model="itemText" v-on:submit.prevent="submitForm" :placeholder="'Add something to the '+namespace"></b-form-input>
            <!-- <input type="text" v-model="itemText" placeholder="Add something to the backlog"> -->
        </form>

    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

 export default {
   name: 'NewItemForm',
   props: ['namespace'],
   data() {
     return {
       itemText: '',
     };
   },
   methods: {
     submitForm() {
       if (this.itemText) {

         // if(this.namespace == 'kanban'){
         //   this.$store.commit(this.namespace+'/addItem', {
         //     text: this.itemText,
         //   });
         // }else{
           console.log('route',this.$route)
           let path = this.$store.state.solid.storage+this.$store.state.table.privacy+'/table/workspaces/'
           let url = path+uuidv4()+'.ttl'//#it'
           this.$store.dispatch(this.namespace+'/addItem', {
             url : url,
             name: this.itemText,
             text: this.itemText
           });
        // }


         this.itemText = '';
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
