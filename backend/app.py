import os
from dotenv import load_dotenv
import asyncio
from anthropic import AsyncAnthropic
from rich.console import Console
from rich.markdown import Markdown

load_dotenv()
ANTHROPIC_API_KEY = os.environ.get('ANTHROPIC_API_KEY')

console = Console()
client = AsyncAnthropic(api_key=ANTHROPIC_API_KEY)  
async def main(): 
    x = True
    print ("Enter q to quit the conversation")
    while x: 
        user_input = input ("User: ")
        if (user_input =='q'):
            x=False
            break
        message = await client.messages.create(
            model="claude-sonnet-4-5",
            max_tokens=1024,
            messages=[{"role": "user", "content": user_input}]
        )
        print ("\n")
        md = Markdown(message.content[0].text)
        console.print(md)
        print ("\n")
    

asyncio.run(main())