<template>
  <div contenteditable="true" @input="update"></div>
</template>

<script>
export default {
    name: 'EditableText',

    props:['content'],
    

  mounted:function(){
    this.$el.innerText = this.content;
  },

  methods:{
    update:function(event){
      this.$emit('update',event.target.innerText);
    }
  }
}
</script>

<style>

</style>