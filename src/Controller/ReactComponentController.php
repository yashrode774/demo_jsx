<?php

namespace Drupal\demo_jsx\Controller;

use Drupal\Core\Controller\ControllerBase;

class ReactComponentController extends ControllerBase {

  public function renderReactUI() {
    // Attach the necessary library for React component.
    $build['#attached']['library'][] = 'demo_jsx/demo_jsx.react';

    // This is temporary, use it to confirm the module can override the theme template.
    // Once this works
    //  - Replace this with a container.template-info.json
    //  - Once it's container.template-info.json we need to move it to inside <template hyperscriptify></template>
    //  -
    //  -
    $build['container'] = [
      '#type' => 'container',
      '#prefix' => '<template hyperscriptify>',
      '#suffix' => '</template>',
      'insider' => ['#markup' => 'inside the container'],
      'form_input' => ['#type' => 'textfield', '#title' => 'A text field']
    ];
    return $build;
  }
}
