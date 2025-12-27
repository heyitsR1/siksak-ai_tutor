import requests
from fastapi import FastAPI
import os
from dotenv import load_dotenv
from anthropic import AsyncAnthropic
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

class QueryDTO(BaseModel): 
    query: str


load_dotenv()

ANTHROPIC_API_KEY = os.environ.get('ANTHROPIC_API_KEY')
client = AsyncAnthropic(api_key=ANTHROPIC_API_KEY)  



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods =['*'],
    allow_headers =['*'],
)

@app.get('/')
async def greet(): 
    return {"This is the siksak API"}


@app.get('/get-message')
async def read_root(): 
    return {"Message": "Congrats on your first api"}

@app.post('/query')
async def query(data: QueryDTO): 
    message = await client.messages.create(
        model="claude-sonnet-4-5",
        max_tokens=1024,
        messages=[{"role": "user", "content": data.query}])
    return message.content[0].text
    

# url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=demo"



# print(requests.get(url).json())