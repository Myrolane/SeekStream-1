angular.module('seekstream').factory('Posts', function ($resource) {
	return {
		self: $resource('http://localhost:5000/posts/:profile_id'),
		one: $resource('http://localhost:5000/posts/:user_id', null,
		{
			'update': {method: 'PUT'}
		}),
	}
});
