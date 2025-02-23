from flask import Flask, render_template, request, redirect,send_file
import sqlite3
import os

app = Flask(__name__)

# Initialize Database
def init_db():
    conn = sqlite3.connect("database/blog.db")
    c = conn.cursor()
    c.execute("CREATE TABLE IF NOT EXISTS blog (id INTEGER PRIMARY KEY, title TEXT, content TEXT)")
    conn.commit()
    conn.close()

init_db()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/experience')
def experience():
    return render_template('experience.html')

@app.route('/learnings')
def learnings():
    return render_template('learnings.html')

@app.route('/achievements')
def achievements():
    return render_template('achievements.html')

@app.route('/certifications')
def certifications():
    return render_template('certifications.html')

@app.route('/download_resume')
def download_resume():
    resume_path = os.path.join(app.root_path, 'static', 'resume.pdf')
    print(resume_path)
    return send_file(resume_path, as_attachment=True)

@app.route('/blog', methods=["GET", "POST"])
def blog():
    conn = sqlite3.connect("database/blog.db")
    c = conn.cursor()

    if request.method == "POST":
        title = request.form["title"]
        content = request.form["content"]
        c.execute("INSERT INTO blog (title, content) VALUES (?, ?)", (title, content))
        conn.commit()

    c.execute("SELECT * FROM blog ORDER BY id DESC")
    posts = c.fetchall()
    conn.close()

    return render_template("blog.html", posts=posts)

@app.route('/delete/<int:post_id>', methods=["POST"])
def delete_post(post_id):
    conn = sqlite3.connect("database/blog.db")
    c = conn.cursor()
    c.execute("DELETE FROM blog WHERE id = ?", (post_id,))
    conn.commit()
    conn.close()
    return redirect("/blog")

if __name__ == '__main__':
    app.run(debug=True)
