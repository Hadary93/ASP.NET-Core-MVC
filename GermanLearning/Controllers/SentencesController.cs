using GermanLearning.Data;
using GermanLearning.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace GermanLearning.Controllers
{
    public class SentencesController : Controller
    {
        private readonly ApplicationDataBase _db;
        private List<string> Selected { get; set; }
        public SentencesController(ApplicationDataBase db)
        {
            _db = db;
            Selected = new();
        }
        public IActionResult Index()
        {
            var sentences = _db.Sentences.ToList();

            var grouped_book = sentences.GroupBy(s => s.Book);    

            return View(grouped_book);
        }

        public IActionResult Book(string bookName)
        {
            var sentence = _db.Sentences.FirstOrDefault(x => x.Book.Equals(bookName) && x.Practiced.Equals("no"));

            return View(sentence);
        }

        public IActionResult Next(int sentenceID)
        {
            var sentence = _db.Sentences.FirstOrDefault(x=>x.Id > sentenceID);

            if (sentence != null)
            {
                return View("Book", sentence);
            }
            else
            {
                return View("Book", _db.Sentences.FirstOrDefault(x => x.Id == sentenceID));
            }

            
        }

        public IActionResult Previous(int sentenceID)
        {
            var sentence = _db.Sentences.OrderBy(x=>x.Id).Where(x => x.Id < sentenceID).LastOrDefault();

            if (sentence != null)
            {
                return View("Book", sentence);
            }
            else
            {
                return View("Book", _db.Sentences.FirstOrDefault(x => x.Id == sentenceID));
            }

        }
        [HttpPost]
        public IActionResult UpdateDatabase(int id , string practiced)
        {
            var sentence = _db.Sentences.FirstOrDefault(x => x.Id.Equals(id));
                
            if (sentence != null)
            {
                sentence.Practiced = practiced;
                _db.SaveChanges();

                return Json(new { success = true });
            }
            else
            {
                return Json(new { success = false });
            }    
        }

        public IActionResult GetPracticedValue(int id)
        {
            // Perform any logic to get the updated 'practiced' value and class
            string practiced = _db.Sentences.FirstOrDefault(x => x.Id.Equals(id))?.Practiced ?? "no";

            return Json(new { practicedValue = practiced });
        }

    }
}
