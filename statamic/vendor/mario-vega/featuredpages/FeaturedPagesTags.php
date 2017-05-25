<?php

namespace Statamic\Addons\FeaturedPages;

use Statamic\API\Page;
use Statamic\Extend\Tags;

class FeaturedPagesTags extends Tags
{
    /**
     * The {{ featured_pages }} tag
     *
     * @return string|array
     */
    public function index()
    {
        $string = '<div class="columns is-full is-multiline">';
        foreach ($this->getParam('featured_pages') as $id) {
            $string .= "{{ pages id=\" . $id .\"}}";
            $string .= '{{ title }}';
            $string .= '{{ /pages }}';
         }
        $string .= '</div>';

        return $string;
    }

    /**
     * The {{ featured_pages:example }} tag
     *
     * @return string|array
     */
    public function featured_pages()
    {
    }
}
