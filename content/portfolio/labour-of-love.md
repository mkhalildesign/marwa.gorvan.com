+++
date = '2025-10-26 12:00:00'
draft = 'false'
title = 'Labour of love: Unifying the maternity self registration form'
slug = 'labour-of-love-maternity'
hiddenInHomeList = true
+++
- Year: 2023
- Skill: Content design, Web design, Design systems, GDS
- Tools: Fimga, Sheets

My goal with this project was to create an online maternity self-referral service using the Government Digital Service system.

Typically the current solution is to go to your local hospital district's website and self-refer by copying and pasting a list of questions and emailing the responses to the hospital. After that you would get a call from the midwife to go over all the information you had previously submitted as well as some additional, more personal, questions. After that, you receive your appointments with the hospital and the midwives. This process is repetitive and outdated, as well as that there are several pain points for the midwives and the expectant mothers.

## Problems
![General flow of self referral](/images/port-mat-flow.png)
### Pain points for the midwives:
- Lack of standard information
- Manual input into hospital system
- Some questions are not asked in the form but are asked in a follow up consultation

### Pain points for the expectant mother:
- A long list can seem daunting
- Unnecessary questions seen
- Information is not always displayed in a clear way
- Question can be repeatedly asked by midwives due to undocumented information
- Some more serious medical conditions are just added to the bottom of the page; these can be easily missed

## Process
![New standarised questions with break down of order](/images/port-mat-sheet.png)
1. Data organisation I got a copy of the current self-referral form from a few hospital authorities and made a list on a spreadsheet.
2. Form structure I reorganised the list into groups and broke up the form to one question per page, adding check and save points, confirmation page.
3. Rewriting the questions I rewrote the questions to be consistent and understandable. Some questions were shortened and others were expanded to provide additional context.
4. Designing form in Figma Once I had a structure I liked in my spreadsheet I started designing the pages in Figma, here I found that I was making further changes to improve the design and experience of the form.


## Design Decisions
![Figma screen overview](/images/port-mat-figma.png)

### Government Digital Service
As the solution would ideally be integrated as part of the NHS system I opted for using the Government Digital Service. The benefits to using the GDS is that it is an established system within the UK that has considered accessibility from the beginning.

### UX Writing
Part of the problem with the current process was the lack of question standardisation. As part of the design process I rewrote the questions to be standard unbiased format. In addition I removed any free form fields wherever possible with standard responses to help solidify this.

### Accessibility
Accessibility was important in the project as I wanted this design to cater to as many mothers as possible. To make sure I achieved this I used the Government Digital Service standards and made sure the UX writing was clear and didn’t use medical jargon unnecessarily. I made sure the colour contrast was fit for current standards, as well as that I separated the form into one question per page to reduce information overload.


### Challenges
- Organising and splitting the information into understandable sections
- Showing and hiding the appropriate information at the right time
- Asking sensitive questions at the the appropriate time
- Getting accurate information when there are a lot of questions

![Preview of some final screens](/images/port-mat-preview.png)
### Outcomes
The outcome was an entire design flow with questions being grouped into appropriate sections. The questions and copy was re-written to ask questions in a non-bias way, some questions needed medical jargon, however most did not. The questions would be asked as and when it is needed, the dynamic form meant that the expectant mother would only see the questions she needed to answer. Summary pages were provided at the end of each section to allow the expectant mother to review her answers and edit them if necessary. The application process also had a start and end page to provide more context and information for the expectant mother.


