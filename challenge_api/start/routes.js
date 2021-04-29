'use strict'

const Route = use('Route')

Route.resource('/users', 'UserController').middleware(['auth:jwt', 'is:menager'])

Route.post('/sessions', 'SessionController.create');
Route.get('/logout', 'SessionController.logout');

Route.resource('students', 'StudentController').apiOnly().middleware(['auth:jwt', 'is:menager'])
Route.resource('grades', 'AssignGradeController').apiOnly().middleware(['auth:jwt', 'is:menager'])
Route.resource('permissions', 'PermissionController').apiOnly().middleware(['auth:jwt', 'is:menager'])
Route.resource('roles', 'RoleController').apiOnly().middleware(['auth:jwt', 'is:menager'])

