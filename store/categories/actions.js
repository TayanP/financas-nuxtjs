export default {
  getCategories() {
    return this.$axios.$get('categories');
  },
   //id da category
   deleteCategory(context, id) {
    //categories url, id
    return this.$axios.$delete(`categories/${id}`)
  },
  /* atualizar */
  updateCategory(context, { id, data }) {
    return this.$axios.$patch(`categories/${id}`, data)
  },
  addCategory(context, data) {
    return this.$axios.$post('categories', data)
  },
}
