import os
from dotenv import load_dotenv
import asyncio
from anthropic import AsyncAnthropic
from rich.console import Console
from rich.markdown import Markdown
from colorama import init, Fore,Back, Style
import requests

load_dotenv()
init(autoreset=True)
ANTHROPIC_API_KEY = os.environ.get('ANTHROPIC_API_KEY')

console = Console()
client = AsyncAnthropic(api_key=ANTHROPIC_API_KEY)  
async def main(): 
    x = True
    print ('\n')
    print (f"{Fore.RED} [Enter q to quit the conversation]")
    print ('\n')
    while x: 
        print(f"{Back.CYAN}User",end=': ')
        user_input = input ()
        if (user_input =='q'):
            x=False
            break
        message = await client.messages.create(
            model="claude-sonnet-4-5",
            max_tokens=1024,
            messages=[{"role": "user", "content": user_input}]
        )
        print ("\n")
        print (f"{Back.LIGHTBLACK_EX}Bot", end=' : ')
        md = Markdown(message.content[0].text)
        console.print(md)
        print ("\n")
    

asyncio.run(main())