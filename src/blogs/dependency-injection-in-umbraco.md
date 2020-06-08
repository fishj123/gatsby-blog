---
title: "Dependency Injection in Umbraco 8"
date: "2020-06-08"
description: "How to use Dependency Injection in Umbraco 8"
---

Dependency injection is a paradigm that enables you to easily inject classes into your constructors without having to create an instance of the class manually such as `var myClass = new ClassName()`. It's very easy to set up in Umbraco so let's take a look at how you can do it.
<br/>
<br/>
The first step is to create a class that you want to inject into some controllers. In this example, we will create a helper class that will send an email. The implementation details of the class have been left out for brevity.

```csharp
namespace MyProject.Helpers
{
    public class EmailHelper
    {

        public void SendEmail(string to, string subject, string body)
        {
            // send email logic here
        }

    }
}
```

<br/>
<br/>

Next, we need to create a composer class that will tell Umbraco that we want this class to be available for dependency injection. I like to create a folder called Composers and within that folder, I create a CustomComposers.cs file. If you prefer, you can create an individual file for each class you wish to compose. This is what that CustomComposers file looks like.

```csharp

namespace MyProject.Composers
{
    public class CustomComposers : IUserComposer
    {
        public void Compose(Composition composition)
        {
            composition.Register<EmailHelper>(); // this line enables our EmailHelper class to be injected
        }
    }
}

```

<br/>
<br/>

You can also use an interface if you would prefer an interface to be injected. This can be done like so:

```csharp
using Umbraco.Core;
using Umbraco.Core.Composing;

namespace MyProject.Composers
{
    public class CustomComposers : IUserComposer
    {
        public void Compose(Composition composition)
        {
            composition.Register<IMessageService, EmailHelper>(); // EmailHelper must inherit from IMessageService
        }
    }
}

```

<br/>
<br/>

It's as simple as that. Now your class can be injected into your controller's constructor. Here is how that might look:

```csharp

namespace MyProject.Controllers.MVCControllers
{
    public class FmMusicDashboardController : RenderMvcController
    {
        private readonly EmailHelper _emailHelper;
        public FmMusicDashboardController(EmailHelper emailHelper)
        {
            _emailHelper = pageHelper;
        }
        public override ActionResult Index(ContentModel model)
        {
            _emailHelper.SendEmail("person@gmail.com", "Dependency Injection Rocks", "This is great")
        }

    }
}

```

<br/>
<br/>

This is a fantastic technique for working with custom classes in your Umbraco projects and one that I would highly recommend implementing in your projects. For more information on Dependency Injection in Umbraco you can checkout the <a class="link" target="_blank" href="https://our.umbraco.com/documentation/reference/using-ioc/">Umbraco guide</a>.
