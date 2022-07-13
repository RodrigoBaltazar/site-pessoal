from flask import Flask, render_template, redirect, request, flash
from flask_mail import Mail, Message
import sys
sys.path.append('./')
from config import email, senha

app = Flask(__name__)
app.secret_key = 'lembrardebotarnoenvakasjkkdjaskjdajiuqwieuqwjeqkejnknncnxxxxxxxxxiiiiiiososaa1234444#'

app.config['DEBUG'] = False

mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": email,
    # Linha abaixo previne de enviar e-mails durante desenvolvimento Comentar e descomentar
    # para send() funcionar
    #"MAIL_SUPPRESS_SEND": True,
    "MAIL_PASSWORD": senha
}

app.config.update(mail_settings)

mail = Mail(app)

class Contato:
    def __init__(self, email, mensagem):
        self.email = email
        self.mensagem = mensagem

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/portfolio')
def get_portfolio():
    return render_template('portfolio.html')

@app.route('/send', methods=['GET', 'POST'])
def send():
    if request.method == 'POST':
        formContato = Contato(
            request.form["email"],
            request.form["mensagem"]
        )

        msg = Message(
            subject = 'Contato do Portfolio - WebSite',
            sender = app.config.get("MAIL_USERNAME"),
            recipients = ['rodrigobaltazarinf@gmail.com', app.config.get("MAIL_USERNAME")],
            body = f'''
                {formContato.email} te enviou a seguinte mensagem:

                {formContato.mensagem}
            '''        
        )
        if (msg.body != ""):
            mail.send(msg)
            flash('Mensagem enviada com sucesso!')
        else:
            print("TENTOU ENVIAR EMAIL VAZIO")
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0')
