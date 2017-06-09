<?php

namespace Statamic\Addons\PHPtoVue;

use Statamic\Extend\Controller;

class PHPtoVueController extends Controller
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

    public function getCollection($collection = 'distributions') {
        return collect(\Statamic\API\Entry::whereCollection($collection))->toJson();
    }
}
