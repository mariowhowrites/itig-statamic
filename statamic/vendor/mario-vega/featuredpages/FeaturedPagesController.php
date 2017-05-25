<?php

namespace Statamic\Addons\FeaturedPages;

use Statamic\Extend\Controller;

class FeaturedPagesController extends Controller
{
    /**
     * Maps to your route definition in routes.yaml
     *
     * @return Illuminate\Http\Response
     */
    public function index()
    {
        return $this->view('index');
    }
}
