import Vue from 'vue'
import Router from 'vue-router'
import Account from '@/components/Account'
import Board from '@/components/Board'
import quiz from '@/components/quiz'
import python from '@/components/python'
import asp from '@/components/asp'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'Board',
        component: Board
      },
      {
        path: '/account',
        name: 'Account',
        component: Account
      },
      {
        path: '/quiz',
        name: 'quiz',
        component: quiz
      },
      {
        path: '/python',
        name: 'python',
        component: python
      },
      {
        path: '/asp',
        name: 'asp',
        component: asp
      }
    ]
})