namespace Blog.Models
{
    using System;

    public class Article
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Text { get; set; }

        public DateTime DateCreated { get; set; }

        public DateTime DateEdited { get; set; }

        public DateTime DatePublished { get; set; }
    }
}
