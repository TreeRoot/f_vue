import Mock from 'mockjs';
let todos = [];
const count = [1, 2, 3, 4, 5]
for (let i=1; i<=count.length; i++) {
	todos.push(Mock.mock({
		id: Mock.Random.guid(),
		title: Mock.Random.first(),
		isDelete: false,
		lock: Mock.Random.boolen(),
		record: count.map(() => {
			return {
				text: Mock.Random.cparagraph(2),
				isDelete: false,
				checked: Mock.Random.boolen()
			};
		})
	}));
}
export {
	todos
};
