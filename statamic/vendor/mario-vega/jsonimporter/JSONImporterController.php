<?php

namespace Statamic\Addons\JSONImporter;

use Statamic\Extend\Controller;

class JSONImporterController extends Controller
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

    public function import_json() {
        $distributions = json_decode(file_get_contents("distributions.json"));
        var_dump($distributions);
    }
}
