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
# async def main(): 
#     x = True
#     print ("Enter q to quit the conversation")
#     while x: 
#         user_input = input ("User: ")
#         if (user_input =='q'):
#             x=False
#             break
#         message = await client.messages.create(
#             model="claude-sonnet-4-5",
#             max_tokens=1024,
#             messages=[{"role": "user", "content": user_input}]
#         )
#         print ("\n")
#         md = Markdown(message.content[0].text)
#         console.print(md)
#         print ("\n")
    

# asyncio.run(main())

#!/usr/bin/env python3
from html_sanitizer import Sanitizer
from nicegui import ui


def root():

    load_dotenv()
    ANTHROPIC_API_KEY = os.environ.get('ANTHROPIC_API_KEY')

    console = Console()
    client = AsyncAnthropic(api_key=ANTHROPIC_API_KEY)  
    # llm = ChatOpenAI(model_name='gpt-4o-mini', streaming=True, openai_api_key=OPENAI_API_KEY)
    llm = client

    async def send() -> None:
        question = text.value
        text.value = ''

        with message_container:
            ui.chat_message(text=question, name='You', sent=True)
            response_message = ui.chat_message(name='Bot', sent=False)
            spinner = ui.spinner(type='dots')

        # Anthropic: use the messages.create API (non-streaming) to get a response
        # The commented example above shows how to call this from a REPL loop.
        message = await llm.messages.create(
            model="claude-sonnet-4-5",
            max_tokens=1024,
            messages=[{"role": "user", "content": question}]
        )

        # message.content is a list of parts; the text is in message.content[0].text
        response = ''
        try:
            response = message.content[0].text
        except Exception:
            # fall back to str(message) if structure differs
            response = str(message)

        with response_message.clear():
            ui.markdown(response)
            # ui.html(response, sanitize=Sanitizer().sanitize)
        ui.run_javascript('window.scrollTo(0, document.body.scrollHeight)')
        message_container.remove(spinner)

    message_container = ui.column().classes('w-full max-w-2xl mx-auto flex-grow items-stretch')

    with ui.footer().classes('bg-white'), ui.column().classes('w-full max-w-3xl mx-auto my-6'):
        with ui.row().classes('w-full no-wrap items-center'):
            placeholder = 'message' if ANTHROPIC_API_KEY != 'not-set' else \
                'Please provide your key in the Python script first!'
            text = ui.input(placeholder=placeholder).props('rounded outlined input-class=mx-3') \
                .classes('w-full self-center').on('keydown.enter', send)
        ui.markdown('simple chat app built with [NiceGUI](https://nicegui.io)') \
            .classes('text-xs self-end mr-8 m-[-1em] text-primary') \
            .classes('[&_a]:text-inherit [&_a]:no-underline [&_a]:font-medium')


ui.run(root, title='Siksak-Learn with AI')