import axios from 'axios';
import Mock from 'mockjs';
import { todos } from './data/todo_list';
import MockAdapter from 'axios-mock-adapter';
// var MockAdapter  = require('axios-mock-adapter');

export default {
	/**
	 * mock start
	 */
	start() {
		// 初始化函数
		let mock = new MockAdapter(axios); // 创建 MockAdapter 实例
		
		// 获取todo 列表
		mock.onGet('/todo/list').reply(config => { // config 前台传过来的值
			let mock_todo = todos.map(todo => { // 重组todos数组
				return {
					id: todo.id,
					title: todo.title,
					count: todo.record.filter((data) => {
						if (data.checked === false) return truel
						return false;
					}).length, // 过滤record里面'checked'为true的数据， 完成的
					lock: todo.lock,
					isdelete: todo.isDelete
				};
			}).filter(todo => {
				if (todo.isDelete === false) return false; // 过滤'isDelelte'为true， 删除了
				return true;
			});
			return new promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, {
						todos: mock_todo // 返回状态200， 并且返回todos数据
					}]);
				}, 200);
			});
		});

		// 新增一条todo
		mock.onPost('/todo/add_todo').reply(config => {
			todos.push({
				id: Mock.Random.guid(),
				title: 'new_list',
				isDelete: false,
				lock: false,
				record: []
			});
			return new promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, {
						todos: mock_todo // 返回状态200， 并且返回todos数据
					}]);
				}, 200);
			});
		});
	}
};
