const fs = require('fs');

// Creates HTML based on the team members entered

function createHTML(team) {
    return`
    <!DOCTYPE html>
    <html lang="en-us">
    
    <head>
    
      <meta charset="UTF-8">
      <title>Team Generator</title>
    
      <!-- Team Generator-->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    
    </head>
    
    <body>
      <!-- Creates the Overall Page -->
      <div class="container">
    
        <!-- Row 1 -->
        <div class="row">
          <div class="col-sm-12">
            <h1 class="text-center">Development Team</h1>
          </div>
        </div>
    
        <!-- Row 2 -->
        <div class="row">
          <div class="col-sm-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt optio provident tempora amet, eveniet et, eum illum, culpa laborum dicta recusandae magni architecto. Illo saepe facilis, unde. Debitis, atque, doloremque?</p>
          </div>
          <div class="col-sm-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolorum perferendis voluptates error ullam placeat repellendus. Repellendus error repellat veritatis recusandae voluptates earum rerum consectetur itaque, ipsam nihil. Alias, nemo.</p>
          </div>
          <div class="col-sm-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ratione sint ex porro excepturi non dolorum, ullam ea quae vel earum, soluta obcaecati natus. Eligendi iusto accusantium mollitia debitis assumenda!</p>
          </div>
        </div>
    
        <!-- Row 3 -->
        <div class="row">
          <div class="col-sm-2">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur optio dolorem dolores odio alias perferendis, commodi cum. Natus libero cum dolore officia quia eveniet modi reprehenderit soluta ratione quisquam? Sequi.</p>
          </div>
          <div class="col-sm-2">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur optio dolorem dolores odio alias perferendis, commodi cum. Natus libero cum dolore officia quia eveniet modi reprehenderit soluta ratione quisquam? Sequi.</p>
          </div>
          <div class="col-sm-2">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur optio dolorem dolores odio alias perferendis, commodi cum. Natus libero cum dolore officia quia eveniet modi reprehenderit soluta ratione quisquam? Sequi.</p>
          </div>
          <div class="col-sm-2">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur optio dolorem dolores odio alias perferendis, commodi cum. Natus libero cum dolore officia quia eveniet modi reprehenderit soluta ratione quisquam? Sequi.</p>
          </div>
          <div class="col-sm-2">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur optio dolorem dolores odio alias perferendis, commodi cum. Natus libero cum dolore officia quia eveniet modi reprehenderit soluta ratione quisquam? Sequi.</p>
          </div>
          <div class="col-sm-2">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur optio dolorem dolores odio alias perferendis, commodi cum. Natus libero cum dolore officia quia eveniet modi reprehenderit soluta ratione quisquam? Sequi.</p>
          </div>
        </div>
    
        <!-- Row 4 -->
        <div class="row">
          <div class="col-sm-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti illo voluptates blanditiis nisi! Ullam dolore aspernatur, ratione error similique veniam iusto, labore repellat eaque nostrum optio doloribus illo nihil dolor?</p>
          </div>
          <div class="col-sm-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sequi ex quam quia iste, nemo molestias dolor, qui dolorem voluptatibus ipsa maxime voluptas et deserunt porro repellendus veritatis nesciunt quisquam.</p>
          </div>
        </div>
      </div>
    
    </body>
    
    </html>   
    
    `
}



// exports the createHTML function
module.exports = createHTML;