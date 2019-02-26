<template>
    <div class="list-todos">
	<a class="list-todo activateListClass list" v-for="item in items">
	    <span class="icon-block" v-if="item.lock"></span>
	    <span class="count-list" v-if="item.count > 0">{{item.count}}</span>
	    {{item.title}}
	</a>

	<a class="link-list-new">
	    <span class="icon-plus"></span>
	    新增 
	</a>
    </div>
</template>

<script>
export default {
    data() {
	return {
	    items: [
		{title:"星期一", count:1, lock:true},
		{title:"星期二", count:3, lock:false},
		{title:"星期三", count:4, lock:true},
	    ]
	};
    }
};
</script>

<style lang="less">
    @import '../common/style/menu.less';
</style>
