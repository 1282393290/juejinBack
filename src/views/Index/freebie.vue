<template>
  <IndexMain :name="name"/>
</template>

<script>
import IndexMain from '@/components/index/indexMain'
export default {
  components: {
    IndexMain
  },
  props: ['name']
}
</script>

