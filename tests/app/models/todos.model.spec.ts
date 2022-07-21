import { todosModel } from '$/app/models'
import { AddTodo, Todo } from '$/app/types'
import { TodosDAO } from '$/db'
import { expect, use } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { Model } from 'sequelize'
import sinon from 'sinon'

use(chaiAsPromised)

describe('app/models/todos.model', () => {
  beforeEach(sinon.restore)

  describe('get', () => {
    it.only('should throw if TodosDAO.findOne throws', () => {
      sinon.stub(TodosDAO, 'findOne').rejects()
      expect(todosModel.get(1)).to.eventually.be.rejected
    })

    it('should return result', () => {
      sinon.stub(TodosDAO, 'findOne').resolves({ id: 1 } as unknown as Model<Todo>)
      expect(todosModel.get(1)).to.eventually.deep.equal({ id: 1 })
    })
  })

  describe('exists', () => {
    it('should throw if TodosDAO.count throws', () => {
      sinon.stub(TodosDAO, 'count').rejects()
      expect(todosModel.exists(1)).to.eventually.be.rejected
    })

    it('should return result', () => {
      sinon.stub(TodosDAO, 'count').resolves(1)
      expect(todosModel.exists(1)).to.eventually.be.equal(1)
    })
  })

  describe('edit', () => {
    it('should throw if TodosDAO.update throws', () => {
      sinon.stub(TodosDAO, 'update').rejects()
      expect(todosModel.edit(1, {})).to.eventually.be.rejected
    })

    it('should return result', () => {
      sinon.stub(TodosDAO, 'update').resolves()
      expect(todosModel.edit(1, {})).to.eventually.be.undefined
    })
  })

  describe('remove', () => {
    it('should throw if TodosDAO.destroy throws', () => {
      sinon.stub(TodosDAO, 'destroy').rejects()
      expect(todosModel.remove(1)).to.eventually.be.rejected
    })

    it('should return result', () => {
      sinon.stub(TodosDAO, 'destroy').resolves()
      expect(todosModel.remove(1)).to.eventually.be.undefined
    })
  })

  describe('add', () => {
    it('should throw if TodosDAO.create throws', () => {
      sinon.stub(TodosDAO, 'create').rejects()
      expect(todosModel.add({} as AddTodo)).to.eventually.be.rejected
    })

    it('should return result', () => {
      sinon.stub(TodosDAO, 'create').resolves()
      expect(todosModel.add({} as AddTodo)).to.eventually.be.undefined
    })
  })

  describe('list', () => {
    it('should throw if TodosDAO.findAll throws', () => {
      sinon.stub(TodosDAO, 'findAll').rejects()
      expect(todosModel.list()).to.eventually.be.rejected
    })

    it('should return result', () => {
      sinon.stub(TodosDAO, 'findAll').resolves([{ id: 1 }] as unknown as Model<Todo>[])
      expect(todosModel.list()).to.eventually.deep.equal([{ id: 1 }])
    })
  })
})
