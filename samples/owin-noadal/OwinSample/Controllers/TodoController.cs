using OwinSample.Models;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace OwinSample.Controllers
{
    [Authorize]
    public class TodoController : ApiController
    {

        private static ConcurrentBag<TodoItem> items = new ConcurrentBag<TodoItem>();
        private static int id = 2;
        public TodoController()
        {
            if (items.Count == 0)
            {
                items.Add(new TodoItem() { TodoItemId = 1, Completed = false, Title = "Update angular modules", Content = "Add automated tokens", UserId = "user@oauthimplicit.ccsctp.net" });
                items.Add(new TodoItem() { TodoItemId = 2, Completed = false, Title = "Add more tests using jasmine-node", Content = "Test cache look up. Test redirect handling.", UserId = "user@oauthimplicit.ccsctp.net" });
            }
        }

        // GET api/<controller>
        public IEnumerable<TodoItem> Get()
        {
            return items.Where(a => a.UserId == User.Identity.Name && !a.Completed).AsEnumerable();
        }

        // GET api/<controller>/5
        public IHttpActionResult Get(int id)
        {

            var item = items.Where(a => a.UserId == User.Identity.Name && a.TodoItemId == id && !a.Completed).FirstOrDefault();
            if (item == null)
            {
                return NotFound();
            }

            return Ok(item);
        }

        // POST api/<controller>
        public void Post(TodoItem item)
        {
            item.Completed = false;
            item.TodoItemId = id++;
            item.UserId = User.Identity.Name;
            items.Add(item);
        }

        // PUT api/<controller>/5
        public IHttpActionResult Put(int id, TodoItem value)
        {
            var item = items.Where(a => a.UserId == User.Identity.Name && a.TodoItemId == id).FirstOrDefault();
            if (item == null)
            {
                return NotFound();
            }

            item.Title = value.Title;
            item.Content = value.Content;
            item.Completed = value.Completed;
            return Ok();
        }

        // DELETE api/<controller>/5
        public IHttpActionResult Delete(int id)
        {
            var item = items.Where(a => a.UserId == User.Identity.Name && a.TodoItemId == id).FirstOrDefault();
            if (item == null)
            {
                return NotFound();
            }

            item.Completed = true;
            return Ok();
        }
    }
}