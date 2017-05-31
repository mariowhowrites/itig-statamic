<?php

namespace Statamic\Addons\ItigCss;

use Statamic\Extend\Modifier;

class ItigCssModifier extends Modifier
{
    /**
     * Modify a value
     *
     * @param mixed  $value    The value to be modified
     * @param array  $params   Any parameters used in the modifier
     * @param array  $context  Contextual values
     * @return mixed
     */
    public function index($value, $params, $context)
    {
        $document = new \DOMDocument();
        $document->loadHTML($value);

        $tags = [
            'p'             =>  'content',
            'h1'            =>  'title is-1',
            'h2'            =>  'title is-2',
            'blockquote'    =>  'is-blockquote'
        ];

        collect($tags)->each( function($classes, $tag) use ($document) {
            $tags = $document->getElementsByTagName($tag);
            foreach ($tags as $tag) {
                $tag->setAttribute('class', $classes);
            }
        });

        $value = $document->saveHTML();
        return $value;
    }
}
