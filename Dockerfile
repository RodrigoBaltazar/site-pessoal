FROM python:latest
RUN mkdir /app
WORKDIR /app
ADD requirements.txt /app
ADD app.py /app
RUN pip3 install -r requirements.txt
#CMD ["gunicorn", "-w 4", "-b", "0.0.0.0:5000", "app:app"]
#CMD ["flask", "run"]


COPY . /app

COPY . .

EXPOSE 5000

#ENTRYPOINT ["python3", "./app.py"]
ENTRYPOINT ["./gunicorn.sh"]
