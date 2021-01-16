<template>
    <div class="add-item">
        <form action="#" method="post" v-on:submit.prevent="submitForm">
            <b-form-input v-model="itemText" v-on:submit.prevent="submitForm" placeholder="Add something to the backlog"></b-form-input>
            <!-- <input type="text" v-model="itemText" placeholder="Add something to the backlog"> -->
        </form>

    </div>
</template>

<script>
 export default {
   name: 'NewItemForm',
   data() {
     return {
       itemText: '',
     };
   },
   methods: {
     submitForm() {
       if (this.itemText) {
         this.$store.commit('kanban/addItem', {
           text: this.itemText,
         });

         this.itemText = '';
       }
     },
   },
 };
 </script>

 /* <style>
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
</style> */
